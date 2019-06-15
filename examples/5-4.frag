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
    
    vec2 scaledPos = normPos * 12.0;
    vec2 scaledFract = fract(scaledPos);
    vec2 scaledIndex = floor(scaledPos);
    
    vec2 center = vec2(0.5);
    
    // creating a different animation curve
    // play around with a graphing tool to find other interesting curves
    float radius = sin( u_time*3. + sin(u_time*10.) + scaledIndex.x*0.2 );
    
    radius = map(radius, -1.0, 1.0, 0.028, 0.552);
    
    vec4 color;
    
    float dist = distance(scaledFract, center);
    
    if(dist < radius) {
        color = vec4(dist, 0.135,0.400, 1.000) ;
        
        // we could have the green and blue values depend on time and/or distance too
        // try making them depend on the column or row numbers
        // float g = map( sin(u_time*10. + dist), -1.0, 1.0, 0.0, 0.632);
        // float b = map( sin(u_time*12.0 + dist), -1.0, 1.0, 0.248, 0.320);
        // color = vec4(dist, g, b, 1.000) ;
    }
    
    gl_FragColor = color;
}