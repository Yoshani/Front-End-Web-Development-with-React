import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props);   
    }

    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        const feedback = comments.map((comment) => {

            const date = new Date(comment.date);
            return(
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {date.toDateString().slice(4,10)}, {date.toDateString().slice(10)}</li>
                </ul>
            );
        });

        if(comments != null)
            return(
                <div>
                    <h4><b>Comments</b></h4>
                    {feedback}
                </div>
            );
        else
            return(
                <div></div>
            );
    }


    render(){
        const dish = this.props.dish;

        if (dish != null)
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>            
            );
        else
            return(
                <div></div>
            );

    }
}

export default DishDetail;