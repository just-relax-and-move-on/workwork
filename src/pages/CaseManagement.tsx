import React, { useState } from 'react';
import { Table, Card, Tag, Button, Modal, Form, Input, Select, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface Case {
  id: string;
  type: string;
  mainType: string;
  subType: string;
  description: string;
  status: string;
  solution: string;
  createTime: string;
  branch: string;
  handler: string;
  stage: string;
}

const CaseManagement: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingCase, setEditingCase] = useState<Case | null>(null);

  const columns = [
    {
      title: '案例编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '分行',
      dataIndex: 'branch',
      key: 'branch',
    },
    {
      title: '经办人',
      dataIndex: 'handler',
      key: 'handler',
    },
    {
      title: '问题类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag color={type === '电核' ? 'blue' : type === '尽调' ? 'green' : 'orange'}>
          {type}
        </Tag>
      ),
    },
    {
      title: '一级分类',
      dataIndex: 'mainType',
      key: 'mainType',
    },
    {
      title: '子分类',
      dataIndex: 'subType',
      key: 'subType',
    },
    {
      title: '问题描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '处理阶段',
      dataIndex: 'stage',
      key: 'stage',
      render: (stage: string) => (
        <Tag color={
          stage === '预约' ? 'default' :
          stage === '电核' ? 'blue' :
          stage === '尽调' ? 'green' :
          stage === '面签' ? 'orange' :
          stage === '双录' ? 'purple' :
          'cyan'
        }>
          {stage}
        </Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === '已解决' ? 'success' : 'processing'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '解决方案',
      dataIndex: 'solution',
      key: 'solution',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Case) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  const data: Case[] = [
    {
      id: 'CASE001',
      type: '电核',
      mainType: '影像资料缺失或不合格',
      subType: '未上传影像资料',
      description: '北京某科技公司预约开户，但未上传营业执照和法人身份证件。电核人员多次联系客户，客户表示资料正在准备中。',
      status: '处理中',
      solution: '已发送资料上传指引，等待客户补充上传。',
      createTime: '2024-05-01',
      branch: '北京分行',
      handler: '张明',
      stage: '电核'
    },
    {
      id: 'CASE002',
      type: '尽调',
      mainType: '影像资料缺失或不合格',
      subType: '影像模糊或不清晰',
      description: '上海某贸易公司上传的营业执照影像严重模糊，无法识别关键信息。尽调人员要求重新上传，但客户表示原件已丢失。',
      status: '已解决',
      solution: '建议客户先补办营业执照，再重新预约开户。',
      createTime: '2024-05-02',
      branch: '上海分行',
      handler: '李华',
      stage: '尽调'
    },
    {
      id: 'CASE003',
      type: '面签',
      mainType: '已存在账户或重复提交',
      subType: '客户已开户',
      description: '广州某制造企业到网点面签时，系统提示该企业已在我行开立基本户。经核实，该企业确实已在其他支行完成开户。',
      status: '已解决',
      solution: '告知客户无需重复开户，建议使用已有账户。',
      createTime: '2024-05-03',
      branch: '广州分行',
      handler: '王芳',
      stage: '面签'
    },
    {
      id: 'CASE004',
      type: '双录',
      mainType: '客户主动取消或未完成',
      subType: '客户未按时到场',
      description: '深圳某科技公司预约双录，但客户未按时到场。多次联系客户，客户表示临时有事无法到场，要求改期。',
      status: '处理中',
      solution: '重新预约双录时间，并发送预约提醒。',
      createTime: '2024-05-04',
      branch: '深圳分行',
      handler: '赵静',
      stage: '双录'
    },
    {
      id: 'CASE005',
      type: '尽调',
      mainType: '账户不符合受理条件',
      subType: '黑名单客户',
      description: '成都某贸易公司在尽调阶段被发现其法人代表在反洗钱黑名单中。经核实，该法人确实存在可疑交易记录。',
      status: '已解决',
      solution: '根据反洗钱规定，拒绝开户申请。',
      createTime: '2024-05-05',
      branch: '成都分行',
      handler: '陈强',
      stage: '尽调'
    },
    {
      id: 'CASE006',
      type: '预约',
      mainType: '账户不符合受理条件',
      subType: '材料不齐全_客户无真实开户资料',
      description: '杭州某科技公司在预约阶段无法提供营业执照原件，仅提供复印件。经核实，该企业营业执照已被吊销。',
      status: '已解决',
      solution: '告知客户需要先恢复营业执照有效性，再重新预约开户。',
      createTime: '2024-05-06',
      branch: '杭州分行',
      handler: '周明',
      stage: '预约'
    },
    {
      id: 'CASE007',
      type: '电核',
      mainType: '已存在账户或重复提交',
      subType: '他行预约未完成',
      description: '南京某贸易公司在电核阶段被发现其正在其他银行办理开户手续。客户表示希望在我行开户，但其他银行流程未完成。',
      status: '处理中',
      solution: '建议客户先完成他行开户流程，再考虑在我行开户。',
      createTime: '2024-05-07',
      branch: '南京分行',
      handler: '吴婷',
      stage: '电核'
    },
    {
      id: 'CASE008',
      type: '面签',
      mainType: '客户主动取消或未完成',
      subType: '客户联系不上',
      description: '武汉某制造企业预约面签后，经办人员多次联系客户，电话始终无人接听。通过其他渠道了解到客户已更换联系方式。',
      status: '处理中',
      solution: '通过企业工商登记信息中的其他联系方式尝试联系客户。',
      createTime: '2024-05-08',
      branch: '武汉分行',
      handler: '刘洋',
      stage: '面签'
    }
  ];

  const handleEdit = (record: Case) => {
    setEditingCase(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record: Case) => {
    // 实现删除逻辑
    console.log('Delete:', record);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      console.log('Form values:', values);
      setIsModalVisible(false);
      form.resetFields();
      setEditingCase(null);
    });
  };

  return (
    <div>
      <Card
        title="案例管理"
        extra={
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            新增案例
          </Button>
        }
      >
        <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />
      </Card>

      <Modal
        title={editingCase ? '编辑案例' : '新增案例'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
          setEditingCase(null);
        }}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="branch"
            label="分行"
            rules={[{ required: true, message: '请选择分行' }]}
          >
            <Select>
              <Select.Option value="北京分行">北京分行</Select.Option>
              <Select.Option value="上海分行">上海分行</Select.Option>
              <Select.Option value="广州分行">广州分行</Select.Option>
              <Select.Option value="深圳分行">深圳分行</Select.Option>
              <Select.Option value="成都分行">成都分行</Select.Option>
              <Select.Option value="杭州分行">杭州分行</Select.Option>
              <Select.Option value="南京分行">南京分行</Select.Option>
              <Select.Option value="武汉分行">武汉分行</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="handler"
            label="经办人"
            rules={[{ required: true, message: '请输入经办人' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="问题类型"
            rules={[{ required: true, message: '请选择问题类型' }]}
          >
            <Select>
              <Select.Option value="电核">电核</Select.Option>
              <Select.Option value="尽调">尽调</Select.Option>
              <Select.Option value="面签">面签</Select.Option>
              <Select.Option value="双录">双录</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="mainType"
            label="一级分类"
            rules={[{ required: true, message: '请选择一级分类' }]}
          >
            <Select>
              <Select.Option value="影像资料缺失或不合格">影像资料缺失或不合格</Select.Option>
              <Select.Option value="已存在账户或重复提交">已存在账户或重复提交</Select.Option>
              <Select.Option value="客户主动取消或未完成">客户主动取消或未完成</Select.Option>
              <Select.Option value="账户不符合受理条件">账户不符合受理条件</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="subType"
            label="子分类"
            rules={[{ required: true, message: '请选择子分类' }]}
          >
            <Select>
              <Select.Option value="未上传影像资料">未上传影像资料</Select.Option>
              <Select.Option value="影像模糊或不清晰">影像模糊或不清晰</Select.Option>
              <Select.Option value="上传影像与信息不符">上传影像与信息不符</Select.Option>
              <Select.Option value="客户已开户">客户已开户</Select.Option>
              <Select.Option value="多次提交相同预约">多次提交相同预约</Select.Option>
              <Select.Option value="他行预约未完成">他行预约未完成</Select.Option>
              <Select.Option value="客户明确取消">客户明确取消</Select.Option>
              <Select.Option value="客户未按时到场">客户未按时到场</Select.Option>
              <Select.Option value="客户联系不上">客户联系不上</Select.Option>
              <Select.Option value="黑名单客户">黑名单客户</Select.Option>
              <Select.Option value="材料不齐全_客户无真实开户资料">材料不齐全_客户无真实开户资料</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label="问题描述"
            rules={[{ required: true, message: '请输入问题描述' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="stage"
            label="处理阶段"
            rules={[{ required: true, message: '请选择处理阶段' }]}
          >
            <Select>
              <Select.Option value="预约">预约</Select.Option>
              <Select.Option value="电核">电核</Select.Option>
              <Select.Option value="尽调">尽调</Select.Option>
              <Select.Option value="面签">面签</Select.Option>
              <Select.Option value="双录">双录</Select.Option>
              <Select.Option value="开发">开发</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: '请选择状态' }]}
          >
            <Select>
              <Select.Option value="处理中">处理中</Select.Option>
              <Select.Option value="已解决">已解决</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="solution"
            label="解决方案"
            rules={[{ required: true, message: '请输入解决方案' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CaseManagement; 