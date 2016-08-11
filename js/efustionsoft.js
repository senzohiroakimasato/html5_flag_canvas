/**
 * Created by Administrator on 8/11/2016.
 */

if (typeof EFUSIONSOFT === 'undefined')
    var EFUSIONSOFT = function() {};

EFUSIONSOFT.RectanglePacker = function ( width, height ) {
    this.root = {};
    this.reset( width, height );
};

EFUSIONSOFT.RectanglePacker.prototype.reset = function ( width, height ) {
    this.root.x = 0;
    this.root.y = 0;
    this.root.w = width;
    this.root.h = height;
    delete this.root.lft;
    delete this.root.rgt;

    this.usedWidth = 0;
    this.usedHeight = 0;
};

EFUSIONSOFT.RectanglePacker.prototype.getDimensions = function () {
    return { w: this.usedWidth, h: this.usedHeight };
};

EFUSIONSOFT.RectanglePacker.prototype.findCoords = function ( w, h ) {

    // private function to traverse the node tree by recursion
    function recursiveFindCoords ( node, w, h ) {

        // private function to clone a node coords and size
        function cloneNode ( node ) {
            return {
                x: node.x,
                y: node.y,
                w: node.w,
                h: node.h
            };
        }

        // if we are not at a leaf then go deeper
        if ( node.lft ) {
            // check first the left branch if not found then go by the right
            var coords = recursiveFindCoords( node.lft, w, h );
            return coords ? coords : recursiveFindCoords( node.rgt, w, h );
        }
        else
        {
            // if already used or it's too big then return
            if ( node.used || w > node.w || h > node.h )
                return null;

            // if it fits perfectly then use this gap
            if ( w == node.w && h == node.h ) {
                node.used = true;
                return { x: node.x, y: node.y };
            }

            // initialize the left and right leafs by clonning the current one
            node.lft = cloneNode( node );
            node.rgt = cloneNode( node );

            // checks if we partition in vertical or horizontal
            if ( node.w - w > node.h - h ) {
                node.lft.w = w;
                node.rgt.x = node.x + w;
                node.rgt.w = node.w - w;
            } else {
                node.lft.h = h;
                node.rgt.y = node.y + h;
                node.rgt.h = node.h - h;
            }

            return recursiveFindCoords( node.lft, w, h );
        }
    }

    // perform the search
    var coords = recursiveFindCoords( this.root, w, h );
    // if fitted then recalculate the used dimensions
    if (coords) {
        if ( this.usedWidth < coords.x + w )
            this.usedWidth = coords.x + w;
        if ( this.usedHeight < coords.y + h )
            this.usedHeight = coords.y + h;
    }

    return coords;
};