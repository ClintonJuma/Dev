import profile from "../assets/images/profile.jpg"
function Hero() {
  return (
    <section className="container py-5">
        <div className="row align-items-center">
            <div className="col-md-6">
                <p className="text-primary">
                    Hello , I'm
                </p>
                <h1 className="display-4 fw-bold">
                    Clinton Nyamora Juma
                </h1>
                <h2 className="text-secondary">
                    ICT Professional | Data Analyst | Data scientist | Full Stack developer
                </h2>
                <p className="lead">
                    I build modern web applications, provide ICT support , 
                    analyze data , utilizing machine learning to develop solutions using merging technologies
                </p>
                <button className="btn btn-primary me-3">
                    View Projects
                </button>
                <button className="btn btn-outline-dark">
                    Donwload CV
                </button>
            </div>

            <div className="col-md-6 text-center">
                <img  src={profile}
                alt="Clinton Juma"
                className="img-fluid rounded-circle"
                width="300"></img>

            </div>
        </div>
    </section>

  );
}
export default Hero;