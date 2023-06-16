import { validate } from 'class-validator';
import { MpMessage } from '../utils/MpMessage';

export abstract class BaseDecorator {
  /** 校验 */
  async _validate(this: BaseDecorator): Promise<boolean> { // 限制this指向
    const result = await validate(this);

    const _msgArr: string[] = []; // 错误信息列表

    result.forEach(it => {
      if (it.constraints) {
        const arr = Object.values(it.constraints);
        if (arr.length > 0) _msgArr.push(...arr.filter(_it => _it));
      }
    });

    if (_msgArr.length > 0) {
      MpMessage.error({ title: '验证失败', msg: _msgArr[0] });
    }

    return result.length === 0;
  }
}
