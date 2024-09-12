const Background=()=>{
    let pics=["1.jpeg","2.jpeg","3.jpg","4.jpeg","5.jpeg","6.jpg","7.jpg","8.jpg","9.jpeg","10.jpg"]

    let randomIndex = Math.floor(Math.random() * pics.length);
    let randomPic = pics[randomIndex];
    return<>
    <img class="back" src={randomPic} alt="" />
    </>


}
export default Background