#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;
    
    // lets increase the numbers of rows and columns to 10
    vec2 scaledPos = normPos * 10.0;
    vec2 scaledFract = fract(scaledPos);
    vec2 scaledIndex = floor(scaledPos);
    
    vec2 center = vec2(0.5, 0.5);
    
    // lets make the radius depend on time *and* the the column number
    float radius = sin(u_time * 3.0 + scaledIndex.x);
    
    // lets make the radius depend on time *and* the the column *and* row number
    // radius = sin(u_time * 3.0 + scaledIndex.x + scaledIndex.y);
    
    radius = map(radius, -1.0, 1.0, 0.1, 0.4);
    
    vec4 color;
    
    float dist = distance(scaledFract, center);
    
    if(dist < radius) {
                
        color = vec4(dist, 0.135,0.400, 1.000) ;
    }
    
    gl_FragColor = color;
}