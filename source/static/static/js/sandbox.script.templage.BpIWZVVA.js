/**
 * 每次都调用
 * 从Version内获取参数版本
 * @param reqNum 第几次请求
 * @return {Number} -1:不使用脚本 0:当前配置 >=1:读取第几版参数
 */
function getVersion(reqNum) {
  return 0;
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * 处理参数值信息,Query Body 都会经过此函数
 * @param reqNum 第几次请求
 * @param key 参数名
 * @param value 参数值
 * @param path 参数路径
 * @param desc 参数描述
 * @param type 参数类型
 * @param check 是否必填
 * @return {*} 参数值
 */
function buildParam(reqNum, key, value, path, desc, type, check) {
  return value;
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * 执行websocket请求时调用,Message 内容 会经过此函数
 * 比如将参数转换成Byte
 * @param msg Message 内的消息内容
 * @return {undefined}
 */
function buildMessage(msg) {
  return undefined;
}
