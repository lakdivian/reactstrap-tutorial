import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import one from '../images/carousel/1.jpg';
import two from '../images/carousel/2.jpg';
import three from '../images/carousel/3.jpg';

class ReactstrapCarousel extends Component {

    state = {
        activeIndex: 0
    }
  
    previous = () => {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });  
    }
    next = () => {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });  
    }
    onExiting = () => {
        this.animating = true;
    }
    onExited = () => {
        this.animating = false;
    }
    goToindex = (newIndex) => {
        if(this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    
    
    render() {

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return(
                <CarouselItem
                    onExiting={ this.onExiting }
                    onExited={ this.onExited }
                    key={ item.image }
                >
                    <img src={ item.image } alt={ item.altText } />
                    <CarouselCaption captionText={ item.caption } captionHeader={ item.caption } />
                </CarouselItem>
            )
        })

        return (
            <div className="rcarousel component">
                <h3 className="text-center text-secondary carousel-header">ReactStrap Carousel</h3>
                <Carousel 
                    activeIndex={ activeIndex }
                    next={ this.next }
                    previous={ this.previous }
                >
                    <CarouselIndicators items={ items } activeIndex={ activeIndex } onClickHandler={ this.goToindex } />
                    { slides }
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={ this.previous } />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={ this.next } />
                </Carousel>
            </div>
        )
    }
}

const items = [
    {
        image: one,
        altText: '1',
        caption: '1'
    },
    {
        image: two,
        altText: '2',
        caption: '2'
    },
    {
        image: three,
        altText: '3',
        caption: '3'
    }
]
export default ReactstrapCarousel;