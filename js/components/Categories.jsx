var Categories = React.createClass({
    render: function () {
        var categories = this.props.categories.map(function(category, key) {
            return (
                <figure className="categories__itemBlock" key={key}>
                    <div className="categories__imageBlock">
                        <img  src={category.img} alt="klass" className="categories__image"/>
                    </div>
                    <figcaption className="categories__titleBlock">
                        <a className="categories__title" href={category.href}>{category.description}</a>
                    </figcaption>
                </figure>
            );
        });

        return (
            <div className="main__categories categories">
                {categories}
            </div>
        );
    }
});
