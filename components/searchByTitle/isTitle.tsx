import { useEffect, useState } from "react"
import axios from "axios";

const Search = ()=>{
    const [title, setTitle] = useState('');
    const [prevT, setPrevT] = useState('');
    const [value, setValue] = useState<Array<any>>([]);;
    const [thisValue, setThisValue] = useState<Array<any>>([]);

    const handleQuery = async function(event: any){
        event.preventDefault();
        
        setPrevT(title)
        await axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${title}`)
        .then(res=>setValue(res.data))
        .catch(function(error){
            if(error.response){
                console.log(error.response)
            }
        });
        setTitle('');
        console.log(value);
    }
    useEffect(()=>{
        setThisValue(value)
    }, [value])
    return(
        <>
        <div className="container mx-auto">
            <div className="pt-2 flex mx-auto text-gray-600 justify-center">
            <form onSubmit={handleQuery}>
                <input className='border border-black pl-3 py-1 rounded focus:outline-none mr-3' type="text" name="search" value={title} placeholder="Search by title.." onChange={event=> setTitle(event.target.value)} />
                <button className="bg-slate-50 border border-black rounded py-1 px-3" type="submit">Search</button>
            </form>
            </div>
            <h3 className="text-lg font-bold text-center my-3">
                {prevT}
            </h3>
            <div>
                {thisValue?.length ? 
                thisValue.map((show)=>{
                    return(
                        <div key={show.quote} className="bg-slate-50 border border-black mx-3 my-3 px-3 py-3">
                            <p className="text-lg font-bold pb-2">{show.anime}</p>
                            <p>{show.quote}</p>
                        </div>
                    )
                })
                :
                    <p className="opacity-75 text-center mt-5">The result is empty. Please add or input another keyword</p>
                }                    
            </div>
        </div>
    </>
    )
}
export default Search;