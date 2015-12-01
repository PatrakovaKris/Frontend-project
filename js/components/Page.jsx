/**
 * Created by Кристина on 30.11.2015.
 */
var Page = React.createClass({
    getDefaultProps:function() {
        return {
            categories: [
                {description:'Класc. гитары',img:'gklass.jpg',href:'Itemsgrid.html'},
                {description:'Акк. гитары',img:'gakust3.jpg',href:'Itemsgrid.html'},
                {description:'Электро-акк. гитары',img:'gelecakust.jpg',href:'Itemsgrid.html'},
                {description:'Электрогитары',img:'gelectro.jpg',href:'Itemsgrid.html'},
                {description:'Басс. гитары',img:'gbass.jpg',href:'Itemsgrid.html'},
                {description:'Укулеле',img:'gukulele.jpg',href:'Itemsgrid.html'},
                {description:'Банджо',img:'gbanjo.jpg',href:'Itemsgrid.html'},
                {description:'Балалайки',img:'gbalalaika.png',href:'Itemsgrid.html'}
            ]
        }
    },

        render: function(){
        return (
            <div className='page'>
                <Header />
                <main className="page__main main">
                    <Categories categories={this.props.categories}/>
                    {Helpers.getFullPath()}
                </main>
                <Footer />
            </div>
        );
    }
});


