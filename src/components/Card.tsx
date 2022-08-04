import { Result } from '../interface';

interface Props {
    character: Result
}
export const Card = ({ character }: Props) => {
    return (
        <div className='card'>
            <img src={character.image} alt={character.name} width={50} loading='lazy' />
            <p>{character.name}</p>
        </div>
    )
}