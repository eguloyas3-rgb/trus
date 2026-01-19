
import styled from "styled-components"

export const Craeteaccount = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;

.mainlogin{
    display: flex;
}
.first{
    background-color: #0c71a9;
    color: white;
    flex: 1;
    padding: 90px 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    
}

.imagspan{
    background-color: #4599c6;
    padding: 10px 10px;
    border-radius: 10px;
    width: fit-content;
    margin-bottom: 10px;
}

.imagspan div{
    width: 120px;
}

.imagspan div img{
  width: 100%;
}


.heade{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
}

.heade p{
    font-size: 14px;
    font-size: 500;
}
.heade span{
    font-size: 13px;
    opacity: .8;
    font-size: 600;
}


.boxss{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
}


.boxmaon{

    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: 13px;
    background-color: #1c83ba;
}

.icos{
    font-size: 20px;
    padding: 7px 7px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #499cc8;
}







.seconds{
    flex: 1;
    padding: 90px 20px;
}


form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px 20px;
    width: fit-content;
    margin: auto;
    border-radius: 10px;
    box-shadow: 1px 1px 7px;
    width: fit-content;
}



.infosslide{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
}

.parts{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
}

.parts.active{
    background-color: #0284c7;
    color: white;
}

.icons1{
    padding: 8px 8px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: lightgray;
}

.icons1.active{
    color: white;
    background-color: #0c71a9;
    width: fit-content;
}

.persoanlinf{
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.mytop{
    font-size: 12px;
    font-weight: 500;
}
.persoanlinf span{
    font-size: 10px;
    opacity: .7;
}
`