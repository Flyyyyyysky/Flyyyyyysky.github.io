import _ from "lodash";

import React,{Component,PropTypes} from 'react';

import Helmet from "react-helmet";

import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps"
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 * lat:30.678135, lng: 104.094185
 */

let display;
export default class GettingStartedExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            markers:
            [
            {
                position: {
                    lat:1.297141,
                    lng:103.854877,

                },
                key: `新加坡`,
                defaultAnimation: 2,
            },
            {
                position: {
                    lat:30.678135,
                    lng: 104.094185

                },
                key: `成都`,
                defaultAnimation: 2,
            }
            ]
        };

    }
    componentWillMount(){

    }
    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }
    handleMapClick(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(),
            },
        ];
        this.setState({
            markers: nextMarkers,
        });

        if (nextMarkers.length === 3) {
            this.props.toast(
                `Right click on the marker to remove it`,
                `Also check the code!`
            );
        }
    }
    handleMarkerRightClick(targetMarker) {
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers,
        });
    }

    render() {
        const GettingStartedGoogleMap =  withScriptjs(withGoogleMap(props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={17}
                defaultCenter={this.state.markers[this.props.positionIndex].position}
                onClick={props.onMapClick}
            >
                {props.markers.map(marker => (
                    <Marker
                        {...marker}
                        onRightClick={() => props.onMarkerRightClick(marker)}
                    />
                ))}
            </GoogleMap>
        )));
            display = this.props.lange?'block':'none'
        return (
            <div style={{height: `100%`,display:display}}>
                <GettingStartedGoogleMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAj8KFMmqVJt3eEr1jUDRA1FLKqlsNEc4&language=en-gb"
                        loadingElement={
                        <div style={{ height: `100%` }}>

                        </div>
                    }
                    containerElement={
                        <div style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    onMapLoad={()=>{this.handleMapLoad()}}
                    onMapClick={()=>{this.handleMapClick()}}
                    markers={this.state.markers}
                    onMarkerRightClick={()=>{this.handleMarkerRightClick()}}
                    positionIndex={this.props.positionIndex}
                />
            </div>
        );
    }
}