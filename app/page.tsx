
import { CarCard, ShowMore, Searchbar, CustomFilter, Hero,  } from "@/components";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catalogue</h1>
          <p>Explorez les voitures que vous pourriez apprécier</p>
        </div>

        <div className='home__filters'>
          <Searchbar />

          <div className='home__filter-container'>
            <CustomFilter title='Carburant' options={fuels} />
            <CustomFilter title='Année' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section id="render-cars">
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Aucun résultat</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}