import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Направление Backend', 'IT Support', 'Направление Frontend',
            'PR-Направление', 'Направление WEB', 'Направление QA', 'Направление SDET и Devops',
            'Направление Мобильной разработки', 'Направление Аккаунтинга', 'Направление Аналитики',
            'Финансовое направление', 'Направление Дизайна', 'Направление HR', 'Отдел продаж',
            'Направление Руководителей проектов', 'Юридическое направление', 'Направление Технической поддержки'],
        unique: true,
        required: true
    },
    surveys: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Survey'
    },
}, {
    timestamps: true
});

export const departmentModel = mongoose.model('Department', DepartmentSchema);