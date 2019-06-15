#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;
    
    vec2 scaledPos = normPos * 5.;
    vec2 scaledFract = fract(scaledPos);
    
    // the floored value will give us whole numbers
    // ie,  0 1 2 3 4 -- as if we were counting the rows and columsn
    vec2 scaledIndex = floor(scaledPos);
    
    vec2 center = vec2(0.5);
    
    float radius = 0.4;
    
    vec4 color;
    
    float dist = distance(scaledFract, center);
    
    if(dist < radius) {
        color = vec4(fract(dist*8.0 - u_time),0.135,0.400,1.000);
        
        // we could make the animation depend on the column number along with time
        // but this doesn't do exactly what we want ...
        // color = vec4( fract(dist*4. + scaledIndex.x - u_time),0.135,0.400,1.000) ;
        
        // we used floor so that scaledIndex would give us values like 1.0 2.0 3.0 etc
        // but now we're passing it into a fract function -- these values all look the same to fract
        // if we multiply the scaledIndex.x value by something less than 1, (eg 0.1)
        // we get 0.1 0.2 0.3 -- which look different to fract
        // color = vec4( fract(dist*4. + scaledIndex.x*0.1 - u_time),0.135,0.400,1.000) ;
        
        // we could make the animation depend on the column number along with time
        // color = vec4(fract(dist*4. + scaledIndex.x*0.1 + scaledIndex.y*0.3 - u_time),0.135,0.400,1.000) ;
    }
    
    gl_FragColor = color;
}