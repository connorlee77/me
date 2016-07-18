var projects = require('./projects.json')

var Project = React.createClass({

    render: function() {

        return (
            <div className="col-lg-4 col-sm-6">
                <a href={this.props.link} className="portfolio-box">
                    <img src={this.props.img} className="img-responsive" alt=""/>
                    <div className="portfolio-box-caption">
                        <div className="portfolio-box-caption-content">
                            
                            <div className="project-category text-faded">
                                {this.props.type} 
                            </div>

                            <div className="project-name">
                                {this.props.projectName} 
                            </div>
                        
                        </div>
                    </div>
                </a>
            </div>
        );
    }

}); 


var arr = [];

_.each(projects, function(item, key) {
    arr.push( <Project 
        type={item.type} 
        projectName={item.name} 
        link={item.link}
        img={item.img}
        key={key}/> );
})

ReactDOM.render(
    <div className="row no-gutter popup-gallery">
        {arr}
    </div>, 
    $('#workhook')[0]);
