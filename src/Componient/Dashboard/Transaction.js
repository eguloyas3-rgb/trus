import styled from "styled-components";





export const Transactions = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;
font-size: 12px;
.transactiosn{
    width: 80%;
    margin: auto;
    padding: 20px 0px;
}

.topstranc{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    padding: 20px 0px;
    cursor: pointer;
}
.historyess{
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
   
  
}



.transaction-item{
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    border: 1px solid lightgray;
  
}


.mysys{
    display: flex;
    gap: 20px;
}


@media screen and (max-width: 925px) {
    
    .transactiosn{
        width: 95%;
    }
}
`