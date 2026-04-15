import { Patient, Doctor, FormModule } from '../types';

export const MOCK_DOCTORS: Doctor[] = [
  { id: '1', name: '汪白腿' },
  { id: '2', name: '李晓明' },
  { id: '3', name: '张雪梅' },
  { id: '4', name: '陈建国' },
];

export const MOCK_PATIENTS: Patient[] = [
  {
    id: '1',
    name: '应娇',
    gender: '未知',
    age: 5,
    appointmentDoctor: '汪白腿',
    appointmentTime: '2026-04-15 12:30:00',
    appointmentDate: '2026-04-15',
    appointmentProject: '儿童口腔检查',
  },
  {
    id: '2',
    name: '刘明浩',
    gender: '男',
    age: 32,
    appointmentDoctor: '李晓明',
    appointmentTime: '2026-04-15 14:00:00',
    appointmentDate: '2026-04-15',
    appointmentProject: '龋齿治疗',
  },
  {
    id: '3',
    name: '王芳',
    gender: '女',
    age: 28,
    appointmentDoctor: '张雪梅',
    appointmentTime: '2026-04-15 15:30:00',
    appointmentDate: '2026-04-15',
    appointmentProject: '正畸咨询',
  },
  {
    id: '4',
    name: '陈小军',
    gender: '男',
    age: 45,
    appointmentDoctor: '汪白腿',
    appointmentTime: '2026-04-16 09:00:00',
    appointmentDate: '2026-04-16',
    appointmentProject: '牙周治疗',
  },
  {
    id: '5',
    name: '林美华',
    gender: '女',
    age: 19,
    appointmentDoctor: '陈建国',
    appointmentTime: '2026-04-16 10:30:00',
    appointmentDate: '2026-04-16',
    appointmentProject: '洁牙',
  },
];

export const MOCK_FORM_CONFIG: FormModule[] = [
  {
    id: 'basic',
    name: '基本信息',
    hasOwnConfirm: true,
    questions: [
      {
        id: 'patient_name',
        label: '姓名',
        type: 'input',
        placeholder: '请输入患者姓名',
        required: true,
      },
      {
        id: 'birthday',
        label: '出生日期',
        type: 'date',
        required: true,
      },
      {
        id: 'address',
        label: '居住地址',
        type: 'input',
        placeholder: '请输入详细居住地址',
      },
      {
        id: 'chief_complaint',
        label: '主诉',
        type: 'text',
        placeholder: '请描述患者主要症状和就诊原因',
        required: true,
        tooltip: {
          text: '主诉是患者就诊的主要原因，用患者自己的语言简短描述主要症状及持续时间，是病历书写的重要组成部分。',
          imageUrl: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
      },
      {
        id: 'medical_history',
        label: '现病史',
        type: 'text',
        placeholder: '请描述症状发生时间、发展过程及相关处理情况',
        tooltip: {
          text: '现病史记录本次就诊疾病的发生、发展过程，包括起病时间、诱因、症状演变及已接受的治疗。',
        },
      },
      {
        id: 'past_history',
        label: '既往史',
        type: 'text',
        placeholder: '请填写患者既往重要疾病史',
        tooltip: {
          text: '既往史包括患者过去曾患的各种疾病，特别是与口腔健康相关的全身系统性疾病，如糖尿病、高血压、心脏病等。',
        },
      },
      {
        id: 'allergy_history',
        label: '过敏史',
        type: 'text',
        placeholder: '如有药物或材料过敏请注明',
        tooltip: {
          text: '过敏史对口腔治疗至关重要，某些牙科材料（如乳胶、金属）或麻醉药物可能引发过敏反应，需提前告知医生。',
          imageUrl: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
      },
    ],
  },
  {
    id: 'caries_risk',
    name: '龋风险评估',
    hasOwnConfirm: false,
    questions: [
      {
        id: 'sugar_intake',
        label: '含糖食物摄入频率',
        type: 'radio',
        required: true,
        options: [
          {
            id: 'sugar_1',
            label: '每天少于3次',
            value: 'low',
            tooltip: {
              text: '低频率糖分摄入对牙齿危害较小。每次进食后，口腔中的细菌会利用糖分产生酸性物质，建议减少含糖食物的摄入次数。',
              imageUrl: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
          {
            id: 'sugar_2',
            label: '每天3-5次',
            value: 'medium',
            tooltip: {
              text: '中等频率糖分摄入存在一定龋齿风险。建议进食后漱口，并增加饮水量以稀释口腔中的酸性物质。',
            },
          },
          {
            id: 'sugar_3',
            label: '每天5次以上',
            value: 'high',
            tooltip: {
              text: '高频率糖分摄入是龋齿的重要危险因素。频繁进食甜食会持续为口腔细菌提供能量，导致牙釉质被持续侵蚀。建议严格控制含糖食物摄入。',
              imageUrl: 'https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
        ],
      },
      {
        id: 'fluoride_use',
        label: '氟化物使用情况',
        type: 'checkbox',
        options: [
          {
            id: 'fluoride_1',
            label: '使用含氟牙膏',
            value: 'toothpaste',
            tooltip: {
              text: '含氟牙膏是预防龋齿最有效的方法之一。氟化物能与牙釉质结合，形成更坚固的氟磷灰石，增强牙齿抗酸能力。建议每天使用两次。',
              imageUrl: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
          {
            id: 'fluoride_2',
            label: '定期涂氟',
            value: 'topical',
            tooltip: {
              text: '专业涂氟治疗可提供比日常牙膏更高浓度的氟化物保护，建议儿童每3-6个月进行一次，成人每年进行一次。',
            },
          },
          {
            id: 'fluoride_3',
            label: '使用含氟漱口水',
            value: 'mouthwash',
            tooltip: {
              text: '含氟漱口水可作为日常口腔护理的补充，帮助氟化物到达牙刷难以清洁的区域，特别适合龋齿高风险人群。',
            },
          },
          {
            id: 'fluoride_4',
            label: '均未使用',
            value: 'none',
            tooltip: {
              text: '未使用任何氟化物产品会增加龋齿风险。建议至少使用含氟牙膏，每天刷牙两次，每次不少于两分钟。',
            },
          },
        ],
      },
      {
        id: 'dmft_score',
        label: '龋失补牙数（DMFT）',
        type: 'number',
        placeholder: '请输入数值',
        unit: '颗',
        tooltip: {
          text: 'DMFT指数是评估龋病严重程度的常用指标，D=龋坏牙数，M=因龋缺失牙数，F=因龋充填牙数。该数值越高说明历史龋患情况越严重，当前龋风险也相对较高。',
          imageUrl: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
      },
      {
        id: 'dry_mouth',
        label: '口干症状',
        type: 'radio',
        options: [
          {
            id: 'dry_1',
            label: '无',
            value: 'none',
            tooltip: {
              text: '唾液对牙齿具有重要的保护作用，正常的唾液分泌有助于中和口腔酸性环境、冲洗食物残渣和抑制细菌生长。',
            },
          },
          {
            id: 'dry_2',
            label: '偶尔',
            value: 'occasional',
            tooltip: {
              text: '偶尔口干可能与饮水不足、用口呼吸或某些食物有关。建议增加饮水量，避免含咖啡因和酒精的饮料。',
            },
          },
          {
            id: 'dry_3',
            label: '经常',
            value: 'frequent',
            tooltip: {
              text: '经常性口干（口干症）会显著增加龋齿风险，因为唾液减少导致口腔自洁能力下降。可能与药物副作用、自身免疫疾病或放射治疗有关，需进一步评估。',
              imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'occlusion',
    name: '咬合情况评估',
    hasOwnConfirm: false,
    questions: [
      {
        id: 'angle_class',
        label: 'Angle分类',
        type: 'radio',
        tooltip: {
          text: 'Angle分类是描述上下颌第一磨牙关系的经典分类方法，由美国正畸学之父Edward Angle提出，是正畸诊断的基础。',
          imageUrl: 'https://images.pexels.com/photos/6812569/pexels-photo-6812569.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
        options: [
          {
            id: 'angle_1',
            label: 'I类（正常咬合）',
            value: 'class1',
            tooltip: {
              text: 'I类咬合关系是正常的咬合关系，上颌第一磨牙的近中颊尖咬合于下颌第一磨牙的近中颊沟，为理想的功能性咬合。',
            },
          },
          {
            id: 'angle_2',
            label: 'II类（远中错合）',
            value: 'class2',
            tooltip: {
              text: 'II类咬合关系表现为下颌相对于上颌偏向远中，俗称"天包地"，常伴有上前牙前突或深覆合，是临床最常见的错合类型之一。',
              imageUrl: 'https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
          {
            id: 'angle_3',
            label: 'III类（近中错合）',
            value: 'class3',
            tooltip: {
              text: 'III类咬合关系表现为下颌相对于上颌偏向近中，俗称"地包天"，可表现为前牙反合，可能与遗传因素或下颌发育过度有关。',
            },
          },
        ],
      },
      {
        id: 'overjet',
        label: '覆盖（mm）',
        type: 'number',
        placeholder: '请输入数值',
        unit: 'mm',
        tooltip: {
          text: '覆盖是指上前牙切缘至下前牙唇面的水平距离，正常值为2-4mm。覆盖过大（深覆盖）或反覆盖均属错合畸形，需要矫治。',
          imageUrl: 'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
      },
      {
        id: 'overbite',
        label: '覆合（mm）',
        type: 'number',
        placeholder: '请输入数值',
        unit: 'mm',
        tooltip: {
          text: '覆合是指上前牙盖过下前牙的垂直距离，正常值为1-3mm（约为下前牙唇面1/3）。深覆合（>4mm）会增加前牙磨耗风险。',
          imageUrl: 'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
      },
      {
        id: 'bruxism',
        label: '夜磨牙/紧咬牙',
        type: 'checkbox',
        options: [
          {
            id: 'brux_1',
            label: '夜间磨牙（磨牙症）',
            value: 'nocturnal',
            tooltip: {
              text: '夜间磨牙是一种睡眠期间发生的非功能性咀嚼活动，可导致牙齿严重磨耗、颞下颌关节紊乱和头痛。可能与压力、焦虑有关。',
              imageUrl: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
          {
            id: 'brux_2',
            label: '白天紧咬牙',
            value: 'daytime',
            tooltip: {
              text: '白天紧咬牙是清醒状态下对上下牙进行持续施力的习惯，可导致肌肉疲劳、牙周组织损伤和颞下颌关节不适。',
            },
          },
          {
            id: 'brux_3',
            label: '无以上情况',
            value: 'none',
            tooltip: {
              text: '无磨牙症和紧咬牙习惯，咬合功能正常，无额外的牙齿磨耗风险。',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'periodontal',
    name: '牙周健康评估',
    hasOwnConfirm: false,
    questions: [
      {
        id: 'bleeding',
        label: '刷牙出血情况',
        type: 'radio',
        options: [
          {
            id: 'bleed_1',
            label: '无出血',
            value: 'none',
            tooltip: {
              text: '刷牙不出血通常提示牙龈健康状态良好，继续保持良好的口腔卫生习惯即可。',
            },
          },
          {
            id: 'bleed_2',
            label: '偶尔出血',
            value: 'occasional',
            tooltip: {
              text: '偶尔刷牙出血可能提示早期牙龈炎。牙龈炎是可逆性的牙周疾病，通过加强口腔清洁和专业洁牙可以治愈。',
              imageUrl: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
          {
            id: 'bleed_3',
            label: '经常出血',
            value: 'frequent',
            tooltip: {
              text: '经常性刷牙出血是牙龈炎或牙周炎的重要信号，提示牙周组织存在炎症。需要尽快接受专业牙周检查和治疗，否则可能发展为不可逆的牙周炎。',
              imageUrl: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=300',
            },
          },
        ],
      },
      {
        id: 'probing_depth',
        label: '牙周探诊深度（PD）',
        type: 'radio',
        tooltip: {
          text: '牙周探诊深度是用牙周探针测量龈沟或牙周袋深度的指标，是评估牙周健康最重要的临床参数之一。正常值≤3mm，>4mm提示存在牙周袋。',
          imageUrl: 'https://images.pexels.com/photos/6812456/pexels-photo-6812456.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
        options: [
          { id: 'pd_1', label: '≤3mm（正常）', value: 'normal', tooltip: { text: '探诊深度≤3mm为正常范围，牙周组织健康。' } },
          { id: 'pd_2', label: '4-5mm（早期）', value: 'early', tooltip: { text: '探诊深度4-5mm提示早期牙周炎，需要进行牙周基础治疗（洁治和刮治）。' } },
          { id: 'pd_3', label: '≥6mm（中重度）', value: 'severe', tooltip: { text: '探诊深度≥6mm提示中重度牙周炎，可能需要手术干预，请及时就医。', imageUrl: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=300' } },
        ],
      },
      {
        id: 'hygiene_habits',
        label: '口腔清洁习惯',
        type: 'checkbox',
        options: [
          { id: 'hygiene_1', label: '每天刷牙两次以上', value: 'brush_twice', tooltip: { text: '建议每天早晚各刷牙一次，每次至少两分钟，使用正确的刷牙方法（巴氏刷牙法），可有效预防龋齿和牙周病。', imageUrl: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=300' } },
          { id: 'hygiene_2', label: '使用牙线', value: 'floss', tooltip: { text: '牙线是清除牙间隙菌斑的最有效工具，建议每天使用牙线至少一次。研究表明，单独刷牙只能清洁约60%的牙面。' } },
          { id: 'hygiene_3', label: '使用冲牙器', value: 'waterpik', tooltip: { text: '冲牙器（水牙线）可以有效清洁牙龈沟和牙间隙，对佩戴矫正器或种植牙的患者尤为适用，但不能完全替代牙线。' } },
          { id: 'hygiene_4', label: '定期专业洁牙', value: 'professional_cleaning', tooltip: { text: '建议每半年进行一次专业洁牙，去除日常刷牙无法清除的牙结石。牙结石是牙周病的重要致病因素。', imageUrl: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=300' } },
        ],
      },
    ],
  },
  {
    id: 'oral_mucosa',
    name: '口腔黏膜检查',
    hasOwnConfirm: false,
    questions: [
      {
        id: 'mucosa_lesion',
        label: '黏膜病损',
        type: 'checkbox',
        options: [
          { id: 'mucosa_1', label: '复发性口腔溃疡', value: 'aphthous', tooltip: { text: '复发性口腔溃疡是最常见的口腔黏膜病，表现为反复发作的圆形或椭圆形溃疡，有"黄、红、凹、痛"的特点。病因复杂，与免疫、遗传、压力等因素有关。', imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=300' } },
          { id: 'mucosa_2', label: '白斑', value: 'leukoplakia', tooltip: { text: '口腔白斑是口腔黏膜上的白色斑块，不能被擦去，属于潜在恶性病变，有一定的癌变率（约1-5%），需要定期监测和活检。' } },
          { id: 'mucosa_3', label: '扁平苔藓', value: 'lichen_planus', tooltip: { text: '口腔扁平苔藓是一种慢性炎症性疾病，表现为网状白纹（Wickham纹）或糜烂，常见于颊黏膜，部分类型有恶变风险，需定期复查。' } },
          { id: 'mucosa_4', label: '无异常', value: 'normal', tooltip: { text: '口腔黏膜未见明显病损，颜色、质地正常。' } },
        ],
      },
      {
        id: 'mucosa_note',
        label: '黏膜检查备注',
        type: 'text',
        placeholder: '请补充描述黏膜异常的位置、大小、颜色等详细信息',
        tooltip: {
          text: '详细记录黏膜病损的部位（如左颊、舌背、软腭等）、大小（以毫米为单位）、颜色、边界清晰度等特征，有助于追踪病情变化。',
        },
      },
    ],
  },
];
