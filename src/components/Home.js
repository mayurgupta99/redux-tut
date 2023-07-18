import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='add-to-cart'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAaVBMVEX///8AAAAmJiYuLi74+Pju7u7l5eVaWlp4eHjq6upkZGT09PT7+/vX19exsbHFxcWMjIw+Pj65ubne3t7Ozs5HR0eBgYFfX1+jo6OcnJxMTEwNDQ1ra2u/v79wcHCTk5M2NjYeHh4WFhYi4M4sAAAEc0lEQVRoge1b2ZaiMBQEFZFFBEXEFfX/P3LGFLRAbiDIJZ4z0/XUp2OnTKi705b1i38X6/i4M8+6sf/CT0PDtIktcIoCo7R2hUfsGKRd2W+s1sZog6TGa5+2xohTv058jowRe3Gd+GaM1wqj2l2bO+9fpIeKdmaS1rJ22Rm8pr2WA3MyJ+cSwlXahWnanbjmxDRtCEGbprUOX9GUdTRvuS+kgjYzTbt8fkdTJziqyXC/XCnemz05TkQik09Pa+9l2tQALeF9vbMBWlfWlCsW5lNBnOos3zKCUBouJkGwV9BGgjanVM6A5Zm+ZGsnaFcT0SKyHuWFAH5qouoEPp/wGKWmJqpNsPmSWMmgqUlYw7vYnFqKVNfPAGQvJ3JJ0E6TpHfkaguxlCymoC3E3nRmisfuESuR7+riEFOiRFilc6ZYpalh0cmVbTCcvRYe9E1sVQ9gYJSQq+U1vg9NuxSLF3lhGCtxXziQykjEYiI/m2wQ61zeAI9vo6BFsky4kriLpgWX+HuEH1UWXnR+qREQ4rirVq+CNmZnhaIOqmUHt8RO2xfKxfKdPQj1BZmJCrD5a9cnFfUAZTAehRCGqf4AAgV3AQZFEW6oAjRFhsUR6E8OVW5mFPrTFvQDic7nbuVrgQqpQlEPKqBWQIiT/3at7RsJf9//5KApOVledTE18JCeEIq6zmTJUWj9ok0rZ7y4we62yOP1kZnUT79qs6puqtsH4Viy6vJEq1Uwv8lWAEV1TwYi1Y0Eng6IzQOxY098SRU39Tm0Wk+OKMDujLR6jTZRrDwZZzQ6iqo+xZfYoOiSrbkFpaY+BBSlTGgqQAEdUWogNGOpI+qGJxttV9FVh8hpbba6D/6nK/wAiI4n7RKvB/C2/afYartfffj9t6IfWvWhYRjOnJ31rtN1OnGzzvoFZQ0tK3vxjPWsAiG9CBwWaFsiGkUa4uNFoO6YTQoUYFo64ARaBtwFWC++NFVFo6g3RHIj+NJUFcFqxYJcvx1fcHopYtSlwI6TdsCLBqxzxgEznj0jrbpDIyNni7rD3E7oLDngTTID+AUnAsdz+sqn0CHr6s9xvb2EPb91FYLLWOR+7pGrmbZ+v0G2V9Wpi1rixzMDjhpmSLs6r2HmPsM0tl2cUOaP2e8b42P1UnI7hLOTMvrRqUn1gt4lrjpxcsldNcv2cTYrfxyZAJYx8PIyDAezR7n9Ack9hM5zluMi4lfTwj2pVA9MZTsYvIoxoi78xvnQ2GgXDBDdTwsN322U9eJ9pvdXFzu2W8M4348ryepn/wwLQXtv0razI9D+tEeVY+ABODRujB6LtUYQvsrMBgBNuaoTD4G1m0xoO1Qle6n9UayVSeLBoUqR7w+/Rlt+AWsa6acWD+y52qw3pb+Q31Uox7vzaJ0e7fr3/BzNQPCCHAwCaXivn5Or4Ld2pEYcUi9rnKAEGu/G2y6ZCrZekWB5Mac+BMoUCei2FvoSpv8X2LjVUdXH8Krgk+R8qfFuW8TFtbvz7qR5Fkfpbz7+n+IPxjU8K035HawAAAAASUVORK5CYII=' />

        </div>

    <div>Home Components</div>
    <div className='cart-wrapper'>
        <div className='img-wapper item'>
    <img src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80' />
            </div>
        <div className='text-wapper item'>
    <span>
        I-Phone
    </span>
    <span>
        Price: $10000.00
    </span>
   </div>
        <div className='btn-wapper item'>
            <button> Add To Cart</button>
   </div>
    </div>
    </div>
  )
}

export default Home;