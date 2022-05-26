import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "./App.css";

const WeekList = (props) => {
    let history = useHistory();
    const my_lists = props.list;
    const [circle] = React.useState([0, 1, 2, 3, 4]);

    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

    function RandomNum() {
        let arr = [];
        for (let i = 0; i < 7; i++) {
            arr.push(getRandom(0, 5));
        }
        return (arr);
    }

    let RanArr = RandomNum();

    function sum(RanArr) {
        let sumR = 0;
        for (let i = 0; i < 7; i++) {
            sumR += RanArr[i];
        }
        return (sumR);
    }

    let RanAvg = (sum(RanArr) / 7).toFixed(1);
    let [avg, setAvg] = React.useState(RanAvg);


    return (
        <ListStyle>
            <Title>내 일주일은?</Title>
            {my_lists.map((list, index) => {
                return (
                    <LineStyle>
                        <ItemStyle key={index}>
                            {list}
                        </ItemStyle>
                        <div>
                            {circle.map((e, i) => {

                                return <Circle
                                    style={{ backgroundColor: i <= RanArr[index] ? ("rgb(255, 235, 59)") : ("rgb(221, 221, 221)") }} />;
                            })}
                        </div>
                        <Arrow
                            onClick={() => {
                                history.push("/review/" + index);
                            }}
                        />
                    </LineStyle>
                );
            })}
            <AverageReset>
                <p>평균 평점
                    {avg}</p>
                <ReBtnSty onClick={() => {
                    setAvg(parseInt(0).toFixed(1));
                }}>
                    <Reset>Reset</Reset>
                </ReBtnSty>
            </AverageReset>

        </ListStyle>
    );
};



const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Title = styled.h3`
text-align: center;
margin: 20px;
`;

const ItemStyle = styled.div`
  max-width: 16px;
  margin: 0px 0.5rem 0px 0px;
  background-color: #fff;
  font-weight: bold;
`;

const LineStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem 0px;
width: 100%;
`;

const Circle = styled.div`
    margin: 5px;
    width: 30px;
    height: 30px;
    background-color: #e0e0e0;
    border-radius: 30px;
    float: left;
`;

const Arrow = styled.div`
    appearance: none;
    background-color: transparent;
    border-color: transparent purple;
    width: 0px;
    height: 0px;
    border-top-width: 1rem;
    border-top-style: solid;
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-left-width: 1.6rem;
    border-left-style: solid;
    color: rgb(255, 255, 255);
    cursor: pointer;
`;

const AverageReset = styled.div`
width: 8rem;
margin: 1rem auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
color: blue;
padding: 9px;
font-size: 25px;
font-weight: bold;
`;

const ReBtnSty = styled.div`
width: inherit;
height: fit-content;
background-color: dodgerblue;
border-radius: 6px;
text-align: center;
margin: 10px 0px 0px;
`;

const Reset = styled.p`
color: white;
font-size: 18px;
`;

export default WeekList;