import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>

           <MessageSender />
           <StoryReel />    
            <Post 
                profilePic='https://avatars3.githubusercontent.com/u/59008066?s=460&u=d0a1e975222cbcbea2af851d300cd1fbf0110563&v=4'
                title='Muhamad Herwan'
                message='eat sleep code repeat!'
                timestamp='1d'
                username='Muhamad Herwan'
                image='https://scontent.fkul15-1.fna.fbcdn.net/v/t1.0-9/120954987_3386373618108471_8250767295853200487_o.jpg?_nc_cat=108&_nc_sid=110474&_nc_eui2=AeH2theUsmMPB6v7hRVvZllYuvI9-5_gnKa68j37n-CcpmrKE8_JzWSy2WHcylNRIV3fY8xx462a2tgLiNY9mHBj&_nc_ohc=9sV28JW13ikAX9RPvYc&_nc_ht=scontent.fkul15-1.fna&oh=339b5b4713ca20e70944f35dc520902e&oe=5FA64C78'
            />
            <Post 
                profilePic='https://avatars3.githubusercontent.com/u/59008066?s=460&u=d0a1e975222cbcbea2af851d300cd1fbf0110563&v=4'
                title='Muhamad Herwan'
                message='Youre guaranteed to fail if you dont take any risks.' 
                timestamp='6d'
                username='Muhamad Herwan'
                image='https://scontent.fkul15-1.fna.fbcdn.net/v/t1.0-9/120948349_3372918106120689_7254529239567879691_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeF-BTWK7cZNuDJd9Xzpc1N4Jj-RLkdOjr4mP5EuR06Ovptxo0Zpud49QJ02iyEnounmXxbA0DYvYkUY08fuOG-q&_nc_ohc=XC5ShhJ7_BAAX-Mg18j&_nc_ht=scontent.fkul15-1.fna&oh=9803449d0555c9eec66ec88e607f3f2f&oe=5FA6160D'
            />
        </div>
    );
} 

export default Feed;
