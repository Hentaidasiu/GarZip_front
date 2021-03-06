import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
    IonContent,
    IonRouterLink, IonIcon, IonLabel, IonItem, IonRow,
    IonCol, IonCard, IonCardContent, IonCardHeader,
    IonCardTitle, IonList, IonThumbnail, IonImg
} from '@ionic/react';
import './Search.css';
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";


const Search = ({ text, bookinfo, mode }) => {
    const user_mode = localStorage.getItem('user_mode');

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    if (user_mode === 'false') {
        return (
            <>
                <IonContent fullscreen>
                    {
                        text ?
                            <div className='Booklist_search'>
                                <IonLabel className='name_catagory'>หมวดหมู่หนังสือ</IonLabel>
                                <IonRow className='col_catagory'>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/นิยาย' mode='md' className='box_catagory1 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory1 textname'>นิยาย</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/ธุรกิจ' mode='md' className='box_catagory2 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory2 textname'>ธุรกิจ</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                                <IonRow className='col_catagory'>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/นิทาน' mode='md' className='box_catagory3 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory3 textname'>นิทาน</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/ศาสนา' mode='md' className='box_catagory4 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory4 textname'>ศาสนา</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                                <IonRow className='col_catagory'>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/บทความ' mode='md' className='box_catagory5 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory5 textname'>บทความ</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/สืบสวน' mode='md' className='box_catagory6 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory6 textname'>สืบสวน</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                                <IonRow className='col_catagory'>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/จิตวิทยา' mode='md' className='box_catagory7 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory7 textname'>จิตวิทยา</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6" className="set_col">
                                        <IonCard href='/Booklist/ทั่วไป' mode='md' className='box_catagory8 box'>
                                            <IonCardHeader>
                                                <IonCardHeader>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                </IonCardContent>
                                                <IonCardTitle className='text_catagory8 textname'>ทั่วไป</IonCardTitle>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>

                            </div>
                            :
                            <>
                                <div className='Booklist'>
                                    <div className='search_results'>ผลการค้นหา</div>
                                    <If condition={mode == 'all'}>
                                        <Then>
                                            <IonList className='list-book'>
                                                {bookinfo.found_book_name.map((book, i) => {
                                                    // console.log(book)
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <IonItem key={i} className="item-list" >
                                                                <IonThumbnail slot="start" className='image' >
                                                                    <IonImg src={book.image} />
                                                                </IonThumbnail>
                                                                <span className="book">
                                                                    <IonLabel className='title'>{book.name}</IonLabel>
                                                                    <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                                                                    <IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel>
                                                                </span>
                                                            </IonItem>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                            <IonList className='list-book'>
                                                {bookinfo.fonud_book_auther.map((book, i) => {
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <IonItem key={i} className="item-list">
                                                                <IonThumbnail slot="start" className='image' >
                                                                    <IonImg src={book.image} />
                                                                </IonThumbnail>
                                                                <span className="book">
                                                                    <IonLabel className='title'>{book.name}</IonLabel>
                                                                    <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                                                                    <IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel>
                                                                </span>
                                                            </IonItem>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                        </Then>
                                        <ElseIf condition={mode == 'name'}>
                                            <IonList className='list-book'>
                                                {bookinfo.found_book_name.map((book, i) => {
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <IonItem key={i} className="item-list">
                                                                <IonThumbnail slot="start" className='image' >
                                                                    <IonImg src={book.image} />
                                                                </IonThumbnail>
                                                                <span className="book">
                                                                    <IonLabel className='title'>{book.name}</IonLabel>
                                                                    <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                                                                    <IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel>
                                                                </span>
                                                            </IonItem>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                        </ElseIf>
                                        <ElseIf condition={mode == 'auther'}>
                                            <IonList className='list-book'>
                                                {bookinfo.fonud_book_auther.map((book, i) => {
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <IonItem key={i} className="item-list">
                                                                <IonThumbnail slot="start" className='image' >
                                                                    <IonImg src={book.image} />
                                                                </IonThumbnail>
                                                                <span className="book">
                                                                    <IonLabel className='title'>{book.name}</IonLabel>
                                                                    <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                                                                    <IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel>
                                                                </span>
                                                            </IonItem>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                        </ElseIf>
                                    </If>
                                </div>
                            </>
                    }

                </IonContent>
            </>
        );
    } else {
        return (
            <>
                <IonContent fullscreen>
                    {
                        text ?
                            <div className='Booklist_search Blind'>
                                <IonLabel className='name_catagory'><h1>หมวดหมู่หนังสือ</h1></IonLabel>
                                <IonItem className="item-list-Blind">

                                    <IonLabel className="title-category">


                                        <IonRouterLink href="/Booklist/นิยาย" >
                                            <IonLabel className='title-category-Blind'><h1> นิยาย </h1></IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/Booklist/ธุรกิจ" >
                                            <IonLabel className='title-category-Blind'><h1> ธุรกิจ  </h1></IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/Booklist/นิทาน" >
                                            <IonLabel className='title-category-Blind'><h1> นิทาน </h1></IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/Booklistศาสนา" >
                                            <IonLabel className='title-category-Blind'><h1> ศาสนา </h1></IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/Booklist/บทความ" >
                                            <IonLabel className='title-category-Blind'><h1> บทความ </h1></IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/Booklist/สืบสวน" >
                                            <IonLabel className='title-category-Blind'><h1> สืบสวน </h1></IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/Booklist/จิตวิทยา " >
                                            <IonLabel className='title-category-Blind'><h1> จิตวิทยา </h1></IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/Booklist/ทั่วไป" >
                                            <IonLabel className='title-category-Blind'><h1> ทั่วไป </h1></IonLabel>
                                        </IonRouterLink>

                                    </IonLabel>
                                </IonItem>


                            </div>
                            :
                            <>
                                <div className='Booklist  Blind'>
                                    <div className='name_catagory'><h3>ผลการค้นหา</h3></div>
                                    <If condition={mode == 'all'}>
                                        <Then>
                                            <IonList className='list-book blind'>
                                                {bookinfo.found_book_name.map((book, i) => {
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <button><IonItem key={i} className="item-list" >

                                                                <span className="book">
                                                                    <IonLabel className='title'>{book.name}</IonLabel>
                                                                    <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                                                                    <IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel>
                                                                </span>
                                                            </IonItem></button>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                            <IonList className='list-book blind'>
                                                {bookinfo.fonud_book_auther.map((book, i) => {
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <button><IonItem key={i} className="item-list">

                                                                <span className="book">
                                                                    <IonLabel className='title'>{book.name}</IonLabel>
                                                                    <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                                                                    <IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel>
                                                                </span>
                                                            </IonItem></button>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                        </Then>
                                        <ElseIf condition={mode == 'name'}>
                                            <IonList className='list-book'>
                                                {bookinfo.found_book_name.map((book, i) => {
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <IonItem key={i} className="item-list">

                                                                <span className="book">
                                                                    <h8><IonLabel className='title'>{book.name}</IonLabel></h8>
                                                                    <h8><IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel></h8>
                                                                    <h8><IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel></h8>
                                                                </span>
                                                            </IonItem>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                        </ElseIf>
                                        <ElseIf condition={mode == 'auther'}>
                                            <IonList className='list-book'>
                                                {bookinfo.fonud_book_auther.map((book, i) => {
                                                    return (
                                                        <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                            <IonItem key={i} className="item-list">

                                                                <span className="book">
                                                                    <h8><IonLabel className='title'>{book.name}</IonLabel></h8>
                                                                    <h8><IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel></h8>
                                                                    <h8><IonLabel className='detial'>ยอดฟัง : {kFormatter(book.view)} ครั้ง </IonLabel></h8>
                                                                </span>
                                                            </IonItem>
                                                        </IonRouterLink>
                                                    )
                                                })}
                                            </IonList>
                                        </ElseIf>
                                    </If>
                                </div>
                            </>
                    }

                </IonContent>
            </>
        );
    }

};

export default Search;
