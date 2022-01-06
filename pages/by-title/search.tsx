import Search from "../../components/searchByTitle/isTitle";
import Link from 'next/link';

const SearchByTitle = ()=>{
    return(
        <div className="container mx-auto">
            <div className="mx-5">
                <h1 className='text-3xl text-center font-bold text-black py-5'>Quotes</h1>
            </div>
            <div className="text-center pb-3 hover:underline underline-offset-8">
                <Link href='/'>Home</Link>
            </div>
            <Search />
        </div>
    )
}
export default SearchByTitle;