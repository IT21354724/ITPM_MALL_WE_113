import React from 'react'
import './Categories.css'
import { assets } from '../../assets/assets'
const Categories = () => {
    return(
    <div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div class="card">
                <img class="card-img-top img-fluid" src= {assets.shopping_img}  alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        
        <div class="col-sm-3">
            <div class="card">
                <img class="card-img-top img-fluid" src= {assets.shopping_img} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="card">
                <img class="card-img-top img-fluid" src= {assets.shopping_img} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="card">
                <img class="card-img-top img-fluid"  src= {assets.shopping_img} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>

    </div>
    </div>

    )
}

export default Categories
