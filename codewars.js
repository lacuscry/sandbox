function past(h, m, s){
    m += h * 60;
    s += m * 60;
    return s * 1000;
}