#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 center = vec2(0.5, 0.5);

    float radius = 0.3;

    // Let the color be black by default
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    float dist = distance(normPos, center);

    if(dist < radius) {
        color = vec4(1.0,0.135,0.400,1.000);
        //we could make the color dependent on dist (ie, distance from the center)
        // color = vec4(dist,0.135,0.400,1.000);
    }

    gl_FragColor = color;
}
