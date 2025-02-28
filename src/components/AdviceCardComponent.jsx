import { useState } from "react";
import { getAdviceQuote } from "../Services/services.js";

const AdviceCardComponent = () => {
    const [adviceQuote, setAdviceQuote] = useState("")
    const [adviceId, setAdviceId] = useState(0)
    const fetchAdvice = async () => {
        // setAdviceQuote(await getAdviceQuote());
        const data = await getAdviceQuote();
        setAdviceId(data.slip.id)
        setAdviceQuote(data.slip.advice)
        console.log(data.slip);
    }
    return (
        <main className="flex justify-center">
            <div className="flex flex-col justify-center place-items-center max-w-[335px] md:max-w-[45%] md:min-w-[480px] bg-[hsl(217,19%,24%)] rounded-2xl relative py-12 px-2 md:p-12">
                {
                    adviceQuote.length == 0 ?
                    <small className="text-[hsl(150,100%,66%)] uppercase font-['Manrope'] tracking-[1.5em] font-extrabold mb-5">
                        Advice #117
                    </small>
                    :
                    <small className="text-[hsl(150,100%,66%)] uppercase font-['Manrope'] tracking-[1.5em] font-extrabold mb-5">
                        A d v i c e # {adviceId}
                    </small>
                }
                {
                    adviceQuote.length == 0 ?
                    <q className="text-[hsl(193,38%,86%)] text-[28px] font-extrabold font-['Manrope'] leading-tight text-center mb-7">
                        It is easy to sit up and take notice, what's difficult is getting up and taking action.
                    </q>
                    :
                    <q className="text-[hsl(193,38%,86%)] text-[28px] font-extrabold font-['Manrope'] leading-tight text-center mb-7">
                        {adviceQuote}
                    </q>

                }
                <img className="mb-3 md:hidden" src="/assets/images/pattern-divider-mobile.svg" alt="Divider Mobile" />
                <img className="mb-3 hidden md:block" src="/assets/images/pattern-divider-desktop.svg" alt="Divider Desktop" />
                <button onClick={fetchAdvice} className="rounded-full bg-[hsl(150,100%,66%)] aspect-square p-4 absolute -bottom-7 hover:shadow-[0_0_35px_5px] hover:shadow-[hsl(150,100%,66%)]">
                    <img src="/assets/images/icon-dice.svg" alt="Dice icon" />
                </button>
            </div>
        </main>
    )
}

export default AdviceCardComponent;