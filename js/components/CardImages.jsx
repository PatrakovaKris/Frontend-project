var CardImages = React.createClass({

    render: function () {
        return (
            <section id='productImages' className="main__itemcard productImages">
                <div id='bigImage' className="productImages__bigImage">
                    <img className="productImages__bigImg" src={Helpers.getFullPath(this.props.cardImages.bigimage)} width="80%" height="75%" alt="gitar"/>
                </div>
                <div id='smallImage' className="productImages__smallImage">
                    <ul className="productImages__imageList">
                        <li className="productImages__imageItem">
                            <img className="productImages__image--arrow"  src={Helpers.getFullPath(this.props.cardImages.arrowLeft)}  alt="cart"/></li>
                        <li className="productImages__imageItem">
                            <img className="productImages__image" src={Helpers.getFullPath(this.props.cardImages.smallimg1)}  alt="cart"/></li>
                        <li className="productImages__imageItem">
                            <img className="productImages__image" src={Helpers.getFullPath(this.props.cardImages.smallimg2)}  alt="cart"/></li>
                        <li className="productImages__imageItem">
                            <img className="productImages__image" src={Helpers.getFullPath(this.props.cardImages.smallimg3)}  alt="cart"/> </li>
                        <li className="productImages__imageItem">
                            <img className="productImages__image--arrow" src={Helpers.getFullPath(this.props.cardImages.arrowRigth)}  alt="cart"/> </li>
                    </ul>
                </div>
            </section>
        );
    }
});