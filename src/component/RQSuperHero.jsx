import { useState } from "react";
import {
  useAddSuperHeros,
  useSuperHeroData,
} from "../assets/hooks/useSuperHeroData";
import { Link } from "react-router-dom";

const onSuccess = (data) => {
  console.log("Performing side effect after successful data fetching", data);
};
const onError = (error) => {
  console.log("Performing side effect after encountering error", error);
};

const RQSuperHero = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { isLoading, data, isError, error, refetch } = useSuperHeroData(
    onSuccess,
    onError
  );

  const { mutate: addHero } = useAddSuperHeros();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <div>RQSuperHero</div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>

      <button onClick={refetch}>Fetch Hero</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      {/* {data.map((heroName) => {
              return  <div key={heroName}>{heroName }</div>
          }
             
          )} */}
    </>
  );
};

export default RQSuperHero;
