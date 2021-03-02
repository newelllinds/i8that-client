import React, { useState } from 'react';
import RecipesParent from './RecipesParent';
import { Container, Row, Col } from 'reactstrap';

const Recipes = () => {

return (
        <Container>
            <Row>  

<div className="tiredsentence"><h4><i>Tired of eating the same thing? Consider the daily recipes below!</i></h4></div>
                
                <div className="outerrandomrecipe-card">
                    <Row>
                        <Col>
                        <RecipesParent />
                        </Col>
                        <Col>
                        <RecipesParent />
                        </Col>
                        <Col>
                        <RecipesParent />
                        </Col>
                </Row>
                <Row>
                        <Col>
                        <RecipesParent />
                        </Col>
                        <Col>
                        <RecipesParent />
                        </Col>
                        <Col>
                        <RecipesParent />
                        </Col>
                    </Row>
                
            </div>
    
     </Row>
        </Container>
    )
}

export default Recipes;