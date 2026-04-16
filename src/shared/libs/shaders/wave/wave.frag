#define TWO_PI 6.2831853072
#define PI 3.14159265359

precision highp float;
uniform vec2 resolution;
uniform float time;

void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    
    gl_FragColor = vec4(grid.x, grid.y, 0.0, 1.0);
}