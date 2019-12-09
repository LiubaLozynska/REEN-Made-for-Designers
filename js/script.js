function buttonClick(){
    let buttons=$('.main-button');
    let len=buttons.length;
    for (let i=0; i<len; i++){
        buttons.eq(i).on('mousedown', function(){
            buttons.eq(i).css('font-weight','500');
        })
        buttons.eq(i).on('mouseup', function(){
            buttons.eq(i).css('font-weight','700');
        })
    }
}
buttonClick();
