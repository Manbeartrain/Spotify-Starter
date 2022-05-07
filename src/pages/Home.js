import React, { useEffect, useState } from 'react';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { Link } from "react-router-dom";
import "./Home.css";

const contract = '0x61D0503A9892432B7cD467a666f38E425AF0D115'.toLowerCase()

const Home = () => {

    const { enableWeb3, Moralis, isAuthenticated, logout, user, authenticate } = useMoralis()

    const [quantity, setQuantity] = useState(0)

    const ethers = Moralis.web3Library

    const contractProcessor = useWeb3ExecuteFunction()

    async function mint(amount) {
        let options = {
            contractAddress: "0x61D0503A9892432B7cD467a666f38E425AF0D115",
            functionName: 'mint',
            abi: [{
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_quantity",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },],
            params: {
                _quantity: ethers.BigNumber.from(amount)
            },
            msgValue: Moralis.Units.ETH(0.03 * amount)
        }

        await contractProcessor.fetch({
            params: options
        })



    }

    useEffect(() => {
        enableWeb3()
    }, [])



    return (
        <>
            <section className=" bg-gray-900 h-[100vh] w-full flex flex-col justify-center items-center relative">

                <p className="text-white text-5xl md:text-8xl uppercase tracking-widest  font-extrabold">Lucifrends</p>
                <img src="https://cdn.discordapp.com/attachments/350419535331065857/971925909835743242/IMG_0048.jpg" className="rounded-md mt-8 h-[25vh] w-[25vh]" alt="lucifers"></img>
                {!isAuthenticated ?
                    <button type="button" className=" bg-blue-400 mt-8 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Connect Wallet</button> :
                    <div className="flex justify-center items-center mt-8">
                        <input min={0} max={6} type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="mr-4 w-[75px]" />
                        <button type="button" className="w-[120px] h-full transition hover:bg-rose-800 hover:text-white border border-rose-800 rounded-lg text-rose-500">Mint</button>
                    </div>
                }
            </section>
            <section className=" bg-gray-900 h-auto md:h-[60vh] w-full text-5xl uppercase  bg-no-repeat bg-top object-cover flex flex-col justify-start items-center">
                <p className="text-5xl md:text-8xl uppercase font-extrabold text-white">about us</p>
                <p className="text-base md:text-2xl uppercase tracking-wide w-3/4 text-white text-center mt-12 font-extralight">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like
                    readable English.
                </p>
                <p className="text-base md:text-2xl uppercase tracking-wide w-3/4 text-white mt-8 text-center font-extralight">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like
                    readable English.
                </p>
            </section>
            <section className="bg-gray-900 h-auto md:h-[80vh] w-full py-32 md:py-0 flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col flex-[1]  h-full justify-center items-center">
                    <p className="text-5xl md:text-8xl uppercase font-extrabold text-white">The Story</p>
                    <p className="text-lg w-3/4 tracking-wide mt-4 text-center text-white font-extralight">
                        It is a long established fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English.

                    </p>
                    <p className="text-lg w-3/4 tracking-wide text-center mt-8 text-white font-extralight">
                        It is a long established fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English.
                    </p>
                </div>
                <div className="flex flex-col flex-[1] h-full justify-center items-center">
                    <div className="w-[350px] h-[350px] mt-24 md:mt-0 md:h-3/5 md:w-3/4 border-8 border-rose-800"></div>
                </div>
            </section>
            <section className="flex flex-col h-auto md:h-[100vh] w-full bg-gray-900 justify-center items-center">
                <p className="text-5xl md:text-8xl uppercase font-extrabold text-white">art/traits</p>
                <div className="flex h-auto md:h-[75vh] w-[100%] md:w-3/4 mt-8 md:mt-0 md:p-8 flex-wrap justify-center items-start">
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh]  md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[85%] h-[30px] bg-gray-800 mt-12 mb-8"></div>
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[25%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] border-8 border-rose-800"></div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col h-[auto] w-full bg-gray-900 justify-center items-center">
                <p className="text-5xl md:text-8xl uppercase font-extrabold text-white mt-20">roadmap</p>
                <div className="flex h-auto md:h-[90vh] w-4/5 p-8 flex-wrap justify-center items-start">
                    <div className="flex basis-[33.3333%]  h-[40vh] justify-center items-center">
                        <div className="h-[90%] w-[90%] flex flex-col justify-around items-center">
                            <div className="h-[25vh] w-[25vh] bg-rose-800"></div>
                            <button type="button" className="w-[80%] p-3 border border-rose-800 rounded-lg text-rose-500">Action Button</button>
                        </div>
                    </div>
                    <div className="flex basis-[33.3333%]  h-[40vh] justify-center items-center">
                        <div className="h-[90%] w-[90%] flex flex-col justify-around items-center">
                            <div className="h-[25vh] w-[25vh] bg-rose-800"></div>
                            <button type="button" className="w-[80%] p-3 border border-rose-800 rounded-lg text-rose-500">Action Button</button>
                        </div>
                    </div>
                    <div className="flex basis-[33.3333%]  h-[40vh] justify-center items-center">
                        <div className="h-[90%] w-[90%] flex flex-col justify-around items-center">
                            <div className="h-[25vh] w-[25vh] bg-rose-800"></div>
                            <button type="button" className="w-[80%] p-3 border border-rose-800 rounded-lg text-rose-500">Action Button</button>
                        </div>
                    </div>
                    <div className="flex basis-[33.3333%]  h-[40vh] justify-center items-center">
                        <div className="h-[90%] w-[90%] flex flex-col justify-around items-center">
                            <div className="h-[25vh] w-[25vh] bg-rose-800"></div>
                            <button type="button" className="w-[80%] p-3 border border-rose-800 rounded-lg text-rose-500">Action Button</button>
                        </div>
                    </div>
                    <div className="flex basis-[33.3333%]  h-[40vh] justify-center items-center">
                        <div className="h-[90%] w-[90%] flex flex-col justify-around items-center">
                            <div className="h-[25vh] w-[25vh] bg-rose-800"></div>
                            <button type="button" className="w-[80%] p-3 border border-rose-800 rounded-lg text-rose-500">Action Button</button>
                        </div>
                    </div>
                    <div className="flex basis-[33.3333%]  h-[40vh] justify-center items-center">
                        <div className="h-[90%] w-[90%] flex flex-col justify-around items-center">
                            <div className="h-[25vh] w-[25vh] bg-rose-800"></div>
                            <button type="button" className="w-[80%] p-3 border border-rose-800 rounded-lg text-rose-500">Action Button</button>
                        </div>
                    </div>

                </div>
            </section>
            <section className="flex flex-col h-[auto] w-full bg-gray-900 justify-center items-center">
                <p className="text-5xl md:text-8xl uppercase font-extrabold text-white mt-20">team</p>
                <div className="flex h-auto md:h-[100vh] w-full md:w-4/5 mt-8 md:mt-0 md:p-8 flex-wrap justify-center items-start">
                    <div className="flex basis-[100%] md:basis-[33.333%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] md:w-[80%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[33.333%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] md:w-[80%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[33.333%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] md:w-[80%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[33.333%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] md:w-[80%] border-8 border-rose-800"></div>
                    </div>
                    <div className="flex basis-[100%] md:basis-[33.333%]  h-1/2 justify-center items-center">
                        <div className="h-[50vh] mb-8 md:mb-0 md:h-[90%] w-[90%] md:w-[80%] border-8 border-rose-800"></div>
                    </div>


                </div>
            </section>
            <section className="flex flex-col h-[100vh] w-full bg-gray-900 justify-center items-center">
                <p className="text-8xl uppercase font-extrabold text-white mt-20">faq</p>

            </section>
        </>
    )
}

export default Home;
