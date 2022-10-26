/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6351efb8ae62b2b2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '008392088a80126895f73f8dbfdee33c',

  PROVINCE: '重庆市',
  CITY: '合川区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '好妹',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZbw-5noMYEKRKwLxt6Axz65usYA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RQEMQApU4ElKqGuP1KrIhwNNzhnv6GnicOERfi7Yiyg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '李好好', year: '2001', date: '9-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '韩竖峰', year: '1998', date: '12-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-11-01' },
        // 第一次见你纪念日
        { keyword: 'marry_day', date: '2019-12-18' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'EFaTlzu2A7qivD0PJYtSjufEYSS1jSEdiedM1G0vCyA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZbw-5noMYEKRKwLxt6Axz65usYA',
    }
  ],

}

module.exports = USER_CONFIG

