/*Find Screen Size
DESCRIPTION:
Cheesy Cheeseman just got a new monitor! He is happy with it, 
but he just discovered that his old desktop wallpaper no longer fits. 
He wants to find a new wallpaper, 
but does not know which size wallpaper he should be looking for, 
and alas, he just threw out the new monitor's box. 
Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

The Challenge
Given an integer width and a string ratio written as WIDTH:HEIGHT, 
output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. 
If the height is fractional, truncate it.
*/

function findScreenHeight(width, ratio) {
    // Parse the width and height from the ratio string
    const [ratioWidth, ratioHeight] = ratio.split(':').map(Number);
    // Calculate the height based on the width and ratio
    const height = Math.floor((width * ratioHeight) / ratioWidth);
    // Return the screen dimensions as a string
    return `${width}x${height}`;
}

  // Test usage
    const width = 1920;
    const ratio = '16:9';
    const screenDimensions = findScreenHeight(width, ratio);
    console.log(screenDimensions); // Output: "1920x1080"