#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {

    // we divide the position by the resolution, to get a 'normalized' positioned
    // this is similar to how one calculates percentages or fractions
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    // try changing the RGB values
    // try making the gradient vertical instead of horizontal
    // try making the gradient grayscale
    gl_FragColor = vec4(normPos.x, 0.0, 0.0, 1.0);

}
