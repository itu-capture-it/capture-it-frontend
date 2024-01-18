import InstagramCarousel from './InstagramCarousel.js'

function Home() {
    return (
        <div className="Home">
            <h1>Welcome to CaptureIT</h1>
            <h2>Who we are</h2>
            <p>
            We're a collective of students, bound by our shared passion for photography. Throughout 2023, students at ITU have captured moments, emotions, and stories, each click of the shutter a testament to our journey as photographers and as individuals.<br/>
            Our cameras have been our companions, bearing witness to our growth and evolution. From the thousands of exposures, we've curated a selection of our best work, a collection that showcases our skills and the life of ITU’s students.<br/>
            This exhibition is a celebration of that journey. It's a tribute to the creativity, talent, and diversity of ITU's photographers. Each photo is a unique perspective, a moment frozen in time, a story waiting to be told.<br/>
            A big Thank You to Epson for printing the photographs and helping us share our work with you.<br/>
            Welcome to the Capture IT photo exhibition.
            </p>
            <h2>Some of our pictures</h2>
            <InstagramCarousel />
        </div>
    );
}

export default Home;
