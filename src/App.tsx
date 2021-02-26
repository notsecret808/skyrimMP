import React, {CSSProperties, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {Card} from "./Components/Card/Card";
import {SubCard} from "./Components/Card/SubCard/SubCard";
import {Modal} from "./Components/Modal/Modal";

function App() {
    const texts = {
        danstar: "Данстар — портовый город, располагающийся на северном побережье Скайрима, столица владения Белый Берег. Один из самых маленьких городов в Скайриме, но очень уютный, является домом для нескольких семей рыбаков и шахтёров.\n" +
            "\n" +
            "Местных жителей по ночам мучают ужасные кошмары, не давая им спать. Источник этих кошмаров герою предстоит выяснить в ходе квеста «Ходячий кошмар».\n" +
            "\n" +
            "Неподалёку от города расположен лагерь Имперского легиона, появившийся в связи с активизацией деятельности повстанцев в этом районе. Первоначально город находится под контролем Братьев Бури.",
        winterhold: "Винтерхолд — город с насыщенной и сложной историей. В далёком прошлом был первой столицей Скайрима, что делало его важным торговым и культурным центром. Именно в те золотые для города годы возле него была основана Коллегия Винтерхолда.\n" +
            "\n" +
            "Судьбоносным (и наиболее ужасным) событием для города стал " +
            "Великий обвал, произошедший в 4Э 122. Чудовищный шторм, бушевавший несколько дней подряд и сопровождавшийся цунами, вызвал обвал большого участка берегового скального массива вместе с основной частью располагавшегося на нём Винтерхолда. После этой катастрофы от некогда великого города осталось лишь несколько зданий, расположенных вдоль единственной уцелевшей улицы.Географически Винтерхолд расположен на северо-восточном побережье Скайрима.",
        morfal: "Морфал расположен в болотах Хьялмарка, поэтому находится в некоторой изоляции от других поселений, но несмотря на это, в городе находится имперский легат. Хотя этот населённый пункт относится к городам и является столицей владения, внешне он производит впечатление обычной деревушки — тут всего несколько зданий и нет даже элементарных оборонительных сооружений.\n" +
            "\n" +
            "Люди здесь часто говорят об увиденных ими странных огнях и тенях, бродящих ночью по болоту, и очень беспокоятся о лесопилке, которая является единственным источником благосостояния Морфала.\n" +
            "\n" +
            "Полезных объектов в городе немного. Уставший от странствий может также отдохнуть в местной таверне или поработать на лесопилке."
    };
    const arrowStyles: CSSProperties = {
        border: "0px solid transparent",
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        cursor: 'pointer',
    };
    const [isOpen, setIsOpen] = useState(false);
    const [cityName, setCityName] = useState("");
    const openModal: (cityName: string) => void = (cityName) => {
        setIsOpen(true);
        setCityName(cityName);
    }
    const closeModal: () => void = () => setIsOpen(false);
    return (
        <div tabIndex={0}
             onKeyDown={(e) => {
                 console.log(e.key);
                 if (e.key === "Escape") closeModal();
             }}>
            <Modal isOpen={isOpen} closeModal={closeModal}/>
            <Carousel
                showThumbs={false}
                autoPlay={false}
                statusFormatter={(current, total) => ``}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    return (
                        <></>
                    );
                }}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <div onClick={onClickHandler} title={label} style={{...arrowStyles, left: 15}}>
                            <img src="/img/arrow_left.svg" alt="" style={{height: "2rem"}}/>
                        </div>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <div onClick={onClickHandler} title={label} style={{...arrowStyles, right: 15}}>
                            <img src="/img/arrow_right.svg" alt="" style={{height: "2rem"}}/>
                        </div>
                    )
                }

            >
                <Card key={'slide 1'} modalOpen={isOpen}>
                    <SubCard bg_link={"/img/danstar_bg.png"} logoImg={"/img/danstar_logo.png"} logoName={'Данстар'}
                             bodyText={texts.danstar} openModal={openModal}/>
                    <SubCard bg_link={"/img/winterhold_bg.png"} logoImg={"/img/winterhold_logo.png"}
                             logoName={'Винтерхолд'}
                             bodyText={texts.winterhold} openModal={openModal}/>
                    <SubCard bg_link={"/img/morfal_bg.png"} logoImg={"/img/morfal_logo.png"} logoName={'Морфал'}
                             bodyText={texts.morfal} openModal={openModal}/>
                </Card>
                <Card key={'slide 2'} modalOpen={isOpen}>
                    <SubCard bg_link={"/img/danstar_bg.png"} logoImg={"/img/danstar_logo.png"} logoName={'Данстар'}
                             bodyText={texts.danstar} openModal={openModal}/>
                    <SubCard bg_link={"/img/danstar_bg.png"} logoImg={"/img/danstar_logo.png"} logoName={'Данстар'}
                             bodyText={texts.danstar} openModal={openModal}/>
                    <SubCard bg_link={"/img/danstar_bg.png"} logoImg={"/img/danstar_logo.png"} logoName={'Данстар'}
                             bodyText={texts.danstar} openModal={openModal}/>
                </Card>
            </Carousel>
        </div>
    );
}

export default App;
