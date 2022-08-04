import InfiniteScroll from "react-infinite-scroll-component"

import { Loading } from "./components/Loading"
import { Card } from "./components/Card"

import { useCharacter } from './hooks/useCharacter';

import { ResponseAPI } from "./interface"


const App = () => {
  const { characters, error, fetchNextPage, hasNextPage, status } = useCharacter()

  if (status === 'loading') return <Loading />

  if (status === 'error') return <h4>Ups!, {`${error}` as string}</h4>


  return (
    <div>
      <h1 className="title">React Infinite Scroll</h1>

      <InfiniteScroll
        dataLength={characters ? characters.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Loading />}
      >
        <div className="grid-container">
          {
            characters && characters.results.map(character => (
              <Card key={character.id} character={character} />
            ))
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}
export default App