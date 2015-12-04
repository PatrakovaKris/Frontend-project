var CardImages = React.createClass({
    render: function () {
        return (
           <section className="main__itemcard productImages">
               <div id ='big' className="productImages__bigImage">
                   <img className="productImages__bigImg" src={Helpers.getFullPath(this.props.cardImages.smallimg1)} width="80%" height="75%" alt="gitar"/>
               </div>
               <div id='small' className="productImages__smallImage">
                   <ul className="productImages__imageList">
                       <li> className="productImages__imageItem">
                           <a className="productImages__image"  href={Helpers.getFullPath(this.props.cardImages.arrowLeft)} alt="cart">1</a>
                       </li>
                       <li className="productImages__imageItem">
                           <a className="productImages__image" href={Helpers.getFullPath(this.props.cardImages.smallimg1)} alt="cart">2</a></li>
                       <li className="productImages__imageItem">
                           <a className="productImages__image" href={Helpers.getFullPath(this.props.cardImages.smallimg2)} alt="cart">3</a></li>
                       <li className="productImages__imageItem">
                           <a className="productImages__image" href={Helpers.getFullPath(this.props.cardImages.smallimg3)} alt="cart">4</a> </li>
                       <li className="productImages__imageItem">
                           <a className="productImages__image" href={Helpers.getFullPath(this.props.cardImages.arrowRigth)} alt="cart">5</a> </li>
                   </ul>
               </div>
           </section>
        );
    }
});
