function listing_clicked(sender) {
    var parent = sender.parentNode;
    var list = parent.getElementsByTagName('ul')[0];
    var marker = parent.getElementsByClassName('listMarker')[0];
    var markerURL = marker.src;
    var resourcesURL = markerURL.substring(0, markerURL.lastIndexOf('/'));
    var newMarkerURL;
    
    if(list.style.display == 'block') {
        list.style.display = 'none';
        
        newMarkerURL = resourcesURL + '/closedlist.png';
        marker.alt = 'closed';
    } else {
        list.style.display = 'block';
        
        newMarkerURL = resourcesURL + '/openlist.png';
        marker.alt = 'open';
    }
    
    marker.src = newMarkerURL;
}
