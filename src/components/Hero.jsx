import React from 'react'
import styled from 'styled-components'
import homeImage from "../assets/hero.png"

export default function Hero() {
    return (
        <Section id="hero">
            <div className="background">
                <img src={homeImage} alt="" />
            </div>
            <div className="content">
                <div className="title">
                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet non corrupti exercitationem rerum laudantium nobis quasi, molestiae tempora accusantium!</p>
                </div>
                <div className="search">
                    <div className="container">
                        <label htmlFor="">Where you want to go</label>
                        <input type="text" placeholder='Search your location' />
                    </div>
                    <div className="container">
                        <label htmlFor="">Check-In</label>
                        <input type="date" />
                    </div>
                    <div className="container">
                        <label htmlFor="">Check-Out</label>
                        <input type="date" />
                    </div>
                    <button>Explore Now</button>
                </div>
            </div>
        </Section>
    )
}
const Section = styled.section`
position: relative;
margin-top: 2rem;
width: 100%;
height: 100%;
.background{
    height: 100%;
    img{
        width:100%;
        filter: brightness(70%);
    }
}
.content{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .title{
        color: white;
        h1{
            font-size: 4rem;
            letter-spacing: 0.2rem;
            font-weight: bolder;
        }
        p{
            text-align: center;
            padding: 0 30vw;
            font-size: 1.1rem;
            margin-top: 0.5rem;
        }
    }
    .search{
        display: flex;
        background-color: #ffffffce;
        padding: 0.5rem;
        border-radius: 0.5rem;
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
            label{
                font-size: 1.1rem;
                color: #03045e;
            }
            input{
                margin-top: 0.4rem;
                background-color: transparent;
                border: none;
                outline: none;
                text-align: center;
                color: black; 
                // &[type="date"]{
                //     padding-left: 3rem;
                // }
                &::placeholder{
                    color: black;
                }
            }
        }
        button{
            padding: 1rem;
            cursor: pointer;
            border-radius: 0.3rem;
            border: none;
            background-color: #4361ee;
            color: white;
            margin-left: 2rem;
            font-size: 1.1rem;
            text-transform: uppercase;
            transition: 0.3s ease-in-out;
            &:hover{
                background-color: #023e8a;
            }
        }
    }
}
@media screen and (min-width:425px) and (max-width:768px){
height: 27rem;
.background{
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.content{
    .search{
        width: 45vw;
        height: 40vh;
    }
    
    .title{
        h1{
            font-size: 1.5rem;
        }   
        p{
            font-size: 0.8rem;
            padding: 0vh 5vw;
        }
    }
    
    .search{
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container{
            padding: 0 0.5rem;
            label{
                font-size: 1rem;
            }
            input[type="date"]{
                font-size: 1rem;
            }
        }
        button{
            padding: 0.6rem;
            font-size: 1rem;
            display: block;
            margin: auto;
        }
    }
}
}
@media screen and (min-width:280px) and (max-width:425px){
height: 25rem;
.background{
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.content{
    .search{
        width: 45vw;
        height: 35vh;
    }
    
    .title{
        h1{
            font-size: 1.2rem;
        }   
        p{
            font-size: 0.6rem;
            padding: 0vh 5vw;
        }
    }
    
    .search{
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container{
            padding: 0 0.5rem;
            label{
                font-size: 0.8rem;
            }
            input[type="date"]{
                font-size: 0.8rem;
            }
        }
        button{
            padding: 0.6rem;
            font-size: 0.7rem;
            display: block;
            margin: auto;
        }
    }
}
}
@media screen and (min-width:426px) and (max-width:1024px){
height: 25rem;
.background{
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.content{
    .title{
        h1{
            font-size: 2.2rem;
        }   
        p{
            font-size: 0.8rem;
            padding: 0vh 10vw;
        }
    }
    
    .search{
        flex-direction: row;
        height: fit-content;
        width: fit-content;
        padding: 0.8rem;
        gap: 0.8rem;
        .container{
            padding: 0 0.5rem;
            label{
                font-size: 0.8rem;
            }
            input[type="date"]{
                font-size: 0.8rem;
            }
        }
        button{
            padding: 0.6rem;
            font-size: 0.7rem;
            display: block;
            margin: auto;
        }
    }
}
}
`;
