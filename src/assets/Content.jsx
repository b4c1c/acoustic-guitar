const Content = (props) => {
    return ( 
        <main>
            <article>

                <h4 className="title" id={props.hashTag} >{props.title}</h4>
                <section className="description">{props.description} <a href={props.webLink} target="_blank" >Wiki</a></section>
                    <figure>
                        <img className="logo" src={props.coverImg} alt={props.figcaption} />
                        <figcaption>{props.figcaption}</figcaption>
                    </figure>
                <section className="stats">
                <p>Price: <span className="price">{props.price}</span> $<br />
                  Rating: {props.stats.rating} <span className="rating"> ({props.stats.reviewCount})</span></p>
                </section>
            </article>

        </main>
     );
}
 
export default Content;