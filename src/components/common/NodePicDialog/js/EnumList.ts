import { getEnumList } from '../_difference';
import { FlowchartNodeColorEnum, FlowchartNodeStatusEnum } from './enum';

export const FlowchartNodeStatusEnumObj = {
  notStarted: {
    ID: FlowchartNodeStatusEnum.notStarted,
    Name: '未开始',
    Color: FlowchartNodeColorEnum.notStarted,
    isWhite: true,
  },
  completed: {
    ID: FlowchartNodeStatusEnum.completed,
    Name: '已完成',
    Color: FlowchartNodeColorEnum.completed,
  },
  inProduction: {
    ID: FlowchartNodeStatusEnum.inProduction,
    Name: '生产中',
    Color: FlowchartNodeColorEnum.inProduction,
  },
  atQuestion: {
    ID: FlowchartNodeStatusEnum.atQuestion,
    Name: '有问题',
    Color: FlowchartNodeColorEnum.atQuestion,
  },
  canceled: {
    ID: FlowchartNodeStatusEnum.canceled,
    Name: '已终止',
    Color: FlowchartNodeColorEnum.canceled,
  },
};

export const FlowchartNodeStatusEnumList = getEnumList(FlowchartNodeStatusEnumObj) as { Color: string, ID: number | '', Name: string, isWhite?: boolean }[];
