//render: function() {
//    var results = this.props.results;
//    return (
//        <ol>
//            {results.map(function(result) {
//                return <li key={result.id}>{result.text}</li>;
//                })}
//        </ol>
//    );
//}
//
//
//var ListItemWrapper = React.createClass({
//    render: function() {
//        return <li>{this.props.data.text}</li>;
//    }
//});
//var MyComponent = React.createClass({
//    render: function() {
//        return (
//            <ul>
//                {this.props.results.map(function(result) {
//                    return <ListItemWrapper key={result.id} data={result}/>;
//                    })}
//            </ul>
//        );
//    }
//});