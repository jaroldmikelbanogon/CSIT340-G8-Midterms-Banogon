import { useState } from "react";
function Feedback(){
    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);

    function handleYes(){
        setYes(yes+1);
    }

    function handleNo(){
        setNo(no+1);
    }

    function handleReset(){
        setNo(0);
        setYes(0);
    }

    return(
    
        <div className="px-180 pt-6">
            <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
              onClick={handleYes}
            >
              Yes
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
              onClick={handleNo}
            >
              No
            </button>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
              onClick={handleReset}
            >
              Clear 
            </button>
            <div className="flex items-end ">
                {yes} out of {yes+no} found this helpful
            </div>
        </div>
    )
}


export default Feedback