/**
 * Created by Кристина on 30.11.2015.
 */
var Page = React.createClass({
    getInitialState: function(){
        return {
            currentPage: Helpers.getPageName()
        }
    },
    getDefaultProps: function() {
        return {
            categories: [
                {description:'Класc. гитары',img:'gklass.jpg',href:'#itemslist'},
                {description:'Акк. гитары',img:'gakust3.jpg',href:'#itemslist'},
                {description:'Электро-акк. гитары',img:'gelecakust.jpg',href:''},
                {description:'Электрогитары',img:'gelectro.jpg',href:''},
                {description:'Басс. гитары',img:'gbass.jpg',href:''},
                {description:'Укулеле',img:'gukulele.jpg',href:''},
                {description:'Банджо',img:'gbanjo.jpg',href:''},
                {description:'Балалайки',img:'gbalalaika.png',href:''}
            ],
            products: [
                {href:'Itemcard.html', src:'1.jpg', name:'Fender AC-560', price:' 600',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart:'Добавить в корзину'},
                {href:'Itemcard.html', src:'1.jpg', name:'Fender AC-560', price:' 600',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart:'Добавить в корзину'},
                {href:'Itemcard.html', src:'1.jpg', name:'Fender AC-560', price:' 600',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart:'Добавить в корзину'},
                {href:'Itemcard.html', src:'1.jpg', name:'Fender AC-560', price:' 600',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart:'Добавить в корзину'},
                {href:'Itemcard.html', src:'1.jpg', name:'Fender AC-560', price:' 600',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart:'Добавить в корзину'},
                {href:'Itemcard.html', src:'1.jpg', name:'Fender AC-560', price:' 600',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart:'Добавить в корзину'},
                {href:'Itemcard.html', src:'1.jpg', name:'Fender AC-560', price:' 600',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart:'Добавить в корзину'},
            ],
            navigation: [
                {href:'',name:'Класcические гитары'},
                {href:'',name:'Класcические гитары'},
                {href:'',name:'Класcические гитары'},
                {href:'',name:'Класcические гитары'},
                {href:'',name:'Класcические гитары'},
                {href:'',name:'Класcические гитары'}
            ]
        }
    },
    updatePage: function(e){
        window.location.assign(e.target.getAttribute('href'));
        this.setState({
            currentPage: Helpers.getPageName()
        });
    },
    render: function(){
        return (
            <div className='page'>
                <Header headerButtonClickHandler={this.updatePage} />
                <main className="page__main main" >
                    {this.state.currentPage == '' ? <Categories categories={this.props.categories} categoryLinkClickHandler={this.updatePage} /> : null }
                    {this.state.currentPage == '#itemslist' ? <Navigation navigation={this.props.navigation} /> : null }
                    {this.state.currentPage == '#itemslist' ? <ProductsList products={this.props.products} /> : null }
                    {this.state.currentPage == '#cart' ? <Cart products={this.props.products} /> : null }
                </main>
                <Footer />
            </div>
        );
    }
});


