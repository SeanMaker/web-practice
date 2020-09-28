




$('img').css(styles)
$('img:nth-of-type(1)').attr('src','https://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg')
$('img').last().attr('src','https://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg')

$('img').attr('src','https://c8.alamy.com/comp/MEP8KE/white-samoyed-puppy-dog-MEP8KE.jpg')

$('li').addClass('correct')
$('li').removeClass('correct')
$('li').first().toggleClass('done')
$('li').toggleClass('done')


const styles={
    width:'376px',
    height:'282px'
}